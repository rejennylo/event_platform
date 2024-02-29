import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs';

const CreateEvent = () => {
  // 調用 auth 函數返回 session object
  const { sessionClaims } = auth();

  // 如果 sessionClaims 存在，取得 userId 的字符串並存入變數 userId
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          CreateEvent
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type='Create' />
      </div>
    </>
  );
};

export default CreateEvent;
