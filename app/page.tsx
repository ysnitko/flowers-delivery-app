import MainContent from './components/mainСontent';
import AboutUs from './components/aboutUs';
import ChooseUS from './components/chooseUs';
import ContactUs from './components/contactUs';
import OurService from './components/ourService';
export default function Home() {
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
    <main className="">
      <MainContent />
      <AboutUs />
      <ChooseUS />
      <ContactUs />
      <OurService />
    </main>
  );
}
