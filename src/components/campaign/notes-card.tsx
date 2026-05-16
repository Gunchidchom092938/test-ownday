const notes = [
  "対象商品がなくなり次第終了です。",
  "表示価格が低額の商品からの割引です。",
  "2本目以降すべてのメガネ・サングラスが表示価格より半額となります。",
  "6,000円（税込）以上のOWNDAYSオリジナルメガネ・サングラスが対象です。",
  "オプションレンズ・セール商品・コラボ商品・レンズ交換・雑貨・修理等は対象外です。",
  "他の割引との併用はできません。",
  "本キャンペーンは予告なく変更・終了させていただく場合がございます。",
];

export function NotesCard() {
  return (
    <section className="mx-auto mt-14 grid w-full max-w-5xl gap-10 rounded-[2rem] bg-white px-8 py-10 text-[#181513] shadow-[0_20px_50px_rgba(80,12,12,0.12)] md:grid-cols-[220px_minmax(0,1fr)] md:px-12">
      <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
        <p
          className="font-display text-[4rem] leading-none tracking-[0.06em] text-[#d3252a]"
          style={{
            WebkitTextStroke: "1.5px #151515",
            textShadow: "4px 4px 0 rgba(0,0,0,0.14)",
          }}
        >
          NOTE
        </p>
        <p className="mt-4 text-lg font-medium">注意事項</p>
      </div>

      <ul className="space-y-3 text-sm leading-7 text-[#2a2522]">
        {notes.map((note) => (
          <li key={note} className="flex gap-3">
            <span className="pt-2 text-[0.55rem]">●</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
