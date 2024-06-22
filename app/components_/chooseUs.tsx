export default function ChooseUS() {
  return (
    <section className="grid grid-cols-2 border-b-[1px] border-border-table">
      <h1 className="p-[80px] text-[50px]">Why choose us ?</h1>
      <div className="flex flex-col [&>div]:p-[80px] [&>div]:flex  [&>div]:flex-col [&>div]:gap-4  [&_h2]:text-[38px] [&_p]:text-base [&>div]:border-b-[1px] [&>div]:border-r-[1px] [&>div]:border-l-[1px] [&>div]:border-border-table [&>*:nth-last-child(odd)]:border-b-[0px]">
        <div>
          <h2>Stylish bouquets by florists</h2>
          <p>
            At our floral studio, our professional florists craft the most
            elegant and stylish bouquets using only the freshest and highest
            quality materials available. We stay up-to-date with the latest
            floral design trends and offer unique arrangements that are sure to
            impress. Let us brighten up your day with our stunning bouquets and
            same-day delivery service.
          </p>
        </div>
        <div>
          <h2>On-time delivery</h2>
          <p>
            Never miss a moment with our on-time flower delivery service. Our
            couriers will deliver your bouquet personally, without boxes, to
            ensure it arrives in perfect condition. Trust us to deliver your
            thoughtful gift reliably.
          </p>
        </div>

        <div>
          <h2>Safe payment</h2>
          <p>
            Never miss a moment with our on-time flower delivery service. Our
            couriers will deliver your bouquet personally, without boxes, to
            ensure it arrives in perfect condition. Trust us to deliver your
            thoughtful gift reliably.
          </p>
        </div>
        <div className="border-b-none">
          <h2>Subscription by your needs</h2>
          <p>
            With our subscription service tailored to your specific needs, you
            can enjoy the convenience of having beautiful bouquets delivered
            straight to your door at regular intervals. Our flexible service is
            perfect for busy individuals or those who want to ensure they always
            have fresh flowers on hand. You'll save time and money with this
            hassle-free solution to your floral needs.
          </p>
        </div>
      </div>
    </section>
  );
}
