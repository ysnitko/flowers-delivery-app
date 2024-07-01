import MainContents from './components/mainСontent';
import AboutUs from './components/aboutUS';
import ChooseUS from './components/chooseUs';
import ContactUs from './components/contactUs';
import OurService from './components/ourService';
import WeddingEvent from './components/weddingEvent';
import ClientSay from './components/clientSay';
import { getCategory } from './lib/actions';

export default async function Home() {
  const categoryLinks: {
    id: number;
    name: string;
    src: string;
  }[] = await getCategory();

  // useEffect(() => {
  //   // Отправка запроса к вашему API маршруту при загрузке страницы
  //   axios
  //     .get('/api/visit')
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка при отправке уведомления:', error.message);
  //     });
  // }, []);

  return (
    <main>
      <MainContents categoryLinks={categoryLinks} />
      <AboutUs />
      <ChooseUS />
      <ContactUs />
      <OurService />
      <WeddingEvent />
      <ClientSay />
    </main>
  );
}
