import FlashMessage from "@/app/components/FlashMessage";
import { getFlashMessage } from "@/app/api-services/commonService";

export default async function FlashMessageWrapper() {
  const flashMessage = await getFlashMessage();

  if (!flashMessage) return null;

  return <FlashMessage flashMessage={flashMessage} />;
}
