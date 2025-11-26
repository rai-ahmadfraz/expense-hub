'use client';
import { useState, useEffect, useMemo } from 'react';
import { getFriends } from '@/app/api-services/friendService';
import Link from 'next/link';

const AddExpense = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [isPersonal, setIsPersonal] = useState<boolean>(false);
  const [shareType, setShareType] = useState<'equal' | 'percentage' | 'fixed'>('equal');

  const [users, setUsers] = useState<Array<{ id: number; name: string }>>([]);
  const [participants, setParticipants] = useState<
    Array<{ id: number; name: string; selected: boolean; share_value: string }>
  >([]);

  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const data = await getFriends();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch friends:', error);
      }
    };
    fetchFriends();
  }, []);

  useEffect(() => {
    setParticipants(
      users.map(u => ({
        id: u.id,
        name: u.name,
        selected: false,
        share_value: '',
      }))
    );
  }, [users]);

  const selectedParticipants = useMemo(() => participants.filter(p => p.selected), [participants]);

  useEffect(() => {
    if (shareType === 'equal' && selectedParticipants.length > 0) {
      const equalValue = (Number(amount) / selectedParticipants.length).toFixed(2);
      setParticipants(prev =>
        prev.map(p => ({ ...p, share_value: p.selected ? equalValue : '' }))
      );
    }
  }, [shareType, amount, selectedParticipants.length]);

  const toggleParticipant = (id: number) => {
    setParticipants(prev =>
      prev.map(p => (p.id === id ? { ...p, selected: !p.selected } : p))
    );
  };

  const updateShareValue = (id: number, value: string) => {
    setParticipants(prev =>
      prev.map(p => (p.id === id ? { ...p, share_value: value } : p))
    );
  };

  useEffect(() => {
    if (isPersonal) {
      setValidationMessage('');
      return;
    }

    if (selectedParticipants.length === 0) {
      setValidationMessage('Select at least one participant.');
      return;
    }

    if (shareType === 'percentage') {
      const total = selectedParticipants.reduce((sum, p) => sum + Number(p.share_value || 0), 0);
      if (total !== 100) {
        setValidationMessage(`Total percentage must be 100. Current: ${total}%`);
        return;
      }
    }

    if (shareType === 'fixed') {
      const total = selectedParticipants.reduce((sum, p) => sum + Number(p.share_value || 0), 0);
      if (Number(amount) && total !== Number(amount)) {
        setValidationMessage(`Total shares must equal the expense amount. Current: ${total}`);
        return;
      }
    }

    setValidationMessage('');
  }, [participants, shareType, amount, isPersonal, selectedParticipants]);

  const handleSubmit = () => {
    if (validationMessage) return;

    const payload = {
      name,
      amount: Number(amount),
      paid_by_id: paidBy,
      is_personal: isPersonal,
      participants: isPersonal
        ? []
        : selectedParticipants.map(p => ({
            id: p.id,
            share_type: shareType,
            share_value: shareType === 'equal' ? undefined : Number(p.share_value),
          })),
    };

    console.log('Final Payload:', payload);
    // Here you would typically send the payload to your API
  };

  const isSaveDisabled =
    Boolean(validationMessage) || !name || !amount || (!isPersonal && !paidBy);

  return (
    <div className='max-w-2xl mx-auto bg-base-100 p-6 rounded-2xl shadow-lg space-y-6 pb-24'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl font-bold text-base-content'>Add Expense</h1>
        <Link href='/dashboard/expenses' className='btn btn-ghost text-primary'>
          Back
        </Link>
      </div>

      <div className='form-control space-y-4'>
        <input
          type='text'
          className='input input-bordered w-full'
          placeholder='Expense Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type='number'
          className='input input-bordered w-full'
          placeholder='Amount'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <div className='flex items-center space-x-4'>
          <span className='font-medium text-base-content'>Is this a personal expense?</span>
          <div className='flex gap-4'>
            <label className='label cursor-pointer'>
              <input
                type='radio'
                name='isPersonal'
                className='radio radio-primary'
                checked={isPersonal === true}
                onChange={() => setIsPersonal(true)}
              />
              <span className='label-text ml-2'>Yes</span>
            </label>
            <label className='label cursor-pointer'>
              <input
                type='radio'
                name='isPersonal'
                className='radio radio-primary'
                checked={isPersonal === false}
                onChange={() => setIsPersonal(false)}
              />
              <span className='label-text ml-2'>No</span>
            </label>
          </div>
        </div>

        {!isPersonal && (
          <div className='space-y-4 p-4 border border-base-300 rounded-lg'>
            <select
              className='select select-bordered w-full'
              value={paidBy}
              onChange={e => setPaidBy(e.target.value)}
            >
              <option value=''>Who paid?</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>

            <select
              className='select select-bordered w-full'
              value={shareType}
              onChange={e => setShareType(e.target.value as any)}
            >
              <option value='equal'>Split Equally</option>
              <option value='percentage'>By Percentage</option>
              <option value='fixed'>By Fixed Amount</option>
            </select>

            <div className='space-y-2'>
              <h3 className='font-medium text-base-content'>Participants</h3>
              <div className='space-y-2 max-h-48 overflow-y-auto p-2 bg-base-200 rounded-md'>
                {participants.map(p => (
                  <div key={p.id} className='flex items-center justify-between'>
                    <label className='label cursor-pointer'>
                      <input
                        type='checkbox'
                        className='checkbox checkbox-primary mr-2'
                        checked={p.selected}
                        onChange={() => toggleParticipant(p.id)}
                      />
                      <span className='label-text'>{p.name}</span>
                    </label>

                    {p.selected && shareType !== 'equal' && (
                      <input
                        type='number'
                        className='input input-sm input-bordered w-28 text-right'
                        placeholder={shareType === 'percentage' ? '%' : 'Amount'}
                        value={p.share_value}
                        onChange={e => updateShareValue(p.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {validationMessage && (
          <div className='alert alert-error shadow-lg text-sm'>
            <div>
              <span>{validationMessage}</span>
            </div>
          </div>
        )}

        <div className='flex justify-end pt-4'>
          <button
            className='btn btn-primary w-full md:w-auto'
            onClick={handleSubmit}
            disabled={isSaveDisabled}
          >
            Save Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
