"use server";
import React from "react";
import Link from "next/link";

const LandingPage: React.FC = async () => {
  // Mock data that would typically come from your API
  const stats = {
    totalUsers: 1250,
    expensesTracked: 58400,
    totalGroups: 350
  };

  const features = [
    {
      icon: "💰",
      title: "Easy Expense Tracking",
      description: "Quickly add expenses and split them with friends or groups"
    },
    {
      icon: "📊",
      title: "Visual Dashboard",
      description: "See who owes whom at a glance with clear visual indicators"
    },
    {
      icon: "👥",
      title: "Group Management",
      description: "Create groups for roommates, trips, or any shared activities"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your financial data is protected with enterprise-grade security"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Frequent Traveler",
      content: "This app made splitting trip expenses with friends so much easier. No more awkward conversations about money!",
      avatar: "👩‍💼"
    },
    {
      name: "Mike R.",
      role: "Roommate",
      content: "Living with 3 roommates used to be a accounting nightmare. Now we settle up in seconds.",
      avatar: "👨‍💻"
    },
    {
      name: "Jessica L.",
      role: "Event Planner",
      content: "Perfect for managing group events and ensuring everyone pays their fair share.",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <nav className="bg-base-100 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">💸 Splitwise</div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-base-content/70 hover:text-base-content transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/register" 
                className="bg-primary text-primary-content px-6 py-2 rounded-full font-semibold hover:bg-primary-focus transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-base-200 to-base-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6">
              Split expenses
              <span className="block text-primary">without the stress</span>
            </h1>
            <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
              The easiest way to share expenses with friends and family. Stop worrying about who owes what and focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="bg-primary text-primary-content px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-focus transition-all transform hover:scale-105"
              >
                Start Splitting Now
              </Link>
              <Link 
                href="#features" 
                className="border-2 border-base-content/20 text-base-content px-8 py-4 rounded-full font-semibold text-lg hover:border-base-content/40 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-base-content">{stats.totalUsers}+</div>
              <div className="text-base-content/60">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-base-content">${(stats.expensesTracked / 1000).toFixed(0)}K+</div>
              <div className="text-base-content/60">Expenses Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-base-content">{stats.totalGroups}+</div>
              <div className="text-base-content/60">Groups Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Why choose us?
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Everything you need to manage shared expenses effortlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-base-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-base-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-base-content mb-3">
                  {feature.title}
                </h3>
                <p className="text-base-content/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              How it works
            </h2>
            <p className="text-xl text-base-content/70">
              Simple steps to expense freedom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-content rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">Add Expenses</h3>
              <p className="text-base-content/70">
                Quickly add expenses and specify who was involved
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-content rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">Automatic Splitting</h3>
              <p className="text-base-content/70">
                Our smart algorithm calculates who owes what automatically
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-content rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-3">Settle Up</h3>
              <p className="text-base-content/70">
                Clear overview makes settling up simple and stress-free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Loved by thousands
            </h2>
            <p className="text-xl text-base-content/70">
              See what our users have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-base-200 rounded-2xl p-6 border border-base-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-base-content">{testimonial.name}</div>
                    <div className="text-sm text-base-content/60">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-base-content/80 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to simplify your expense sharing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already splitting expenses the easy way
          </p>
          <Link 
            href="/register" 
            className="bg-primary-content text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-base-100 transition-all transform hover:scale-105 inline-block"
          >
            Get Started Free
          </Link>
          <p className="mt-4 text-sm opacity-80">
            No credit card required • Setup in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 border-t border-base-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-base-content mb-2">💸 Splitwise</div>
              <p className="text-base-content/60">
                Making expense sharing simple and fair
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-base-content/70 hover:text-base-content transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-base-content/70 hover:text-base-content transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-base-content/70 hover:text-base-content transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-center md:text-left mt-8 pt-8 border-t border-base-300">
            <p className="text-base-content/60">
              © 2024 Splitwise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;