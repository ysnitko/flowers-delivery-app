import HomeСontetnt from './components/homeСontetnt';
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
      <HomeСontetnt />
    </main>
  );
}
