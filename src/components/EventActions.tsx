"use client";

type Props = {
  title: string;
  dateLabel: string;
  timeLabel: string;
  locationLabel: string;
};

export default function EventActions({
  title,
  dateLabel,
  timeLabel,
  locationLabel,
}: Props) {
  const addToCalendar = () => {
    // Simple : ouvre une page /calendrier ou génère un .ics plus tard
    alert(`Ajouter au calendrier : ${title}`);
  };

  const participate = () => alert("Merci ! Votre participation est enregistrée.");
  const bringFriends = () => alert("Super ! Vous venez avec 2 amis.");

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
      <h3 className="text-2xl font-extrabold">Je participe</h3>

      <p className="mt-4 text-black/70 leading-relaxed">
        {dateLabel} • {timeLabel}
        <br />
        <span className="font-semibold">{locationLabel}</span>
      </p>

      <div className="mt-8 grid gap-3">
        <button
          onClick={participate}
          className="rounded-2xl px-6 py-4 font-bold uppercase text-white bg-[#F15A24] hover:scale-[1.03] transition-transform"
        >
          Je participe
        </button>

        <button
          onClick={bringFriends}
          className="rounded-2xl px-6 py-4 font-bold uppercase text-white bg-[#007A3D] hover:scale-[1.03] transition-transform"
        >
          Je viens avec 2 amis
        </button>

        <button
          onClick={addToCalendar}
          className="rounded-2xl px-6 py-4 font-bold uppercase border-2 border-black/10 hover:scale-[1.03] transition-transform"
        >
          Ajouter à mon calendrier
        </button>
      </div>
    </div>
  );
}
