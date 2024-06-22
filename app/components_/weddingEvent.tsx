export default function WeddingEvent() {
  return (
    <section className="flex justify-center h-screen items-center bg-wedding-bg text-text-btn">
      <div className="max-w-[530px] flex flex-col items-center gap-4 text-center">
        <p className="text-sm">SERVICE</p>
        <p className="text-5xl">Wedding &amp; Event Decor</p>
        <p className="text-lg text-center">
          Let our team of expert florists and designers create stunning,
          on-trend floral décor for your special day. Trust us to bring your
          vision to life.
        </p>
        <button className="mt-4 text-base px-6 py-4 border-[1px] border-border-white tracking-widest">
          INQUIRE NOW
        </button>
      </div>
    </section>
  );
}
