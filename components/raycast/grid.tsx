export function Grid() {
  return (
    <div className="py-1 px-2 text-[--text]">
      <div className="p-2 text-1 leading-none font-medium tracking-[0.1px] text-[--text-600]">
        Grid
      </div>
      <div className="grid grid-cols-5 gap-2 px-2">
        <div>
          <div
            className="rounded-3 w-[138px] h-[138px] mb-1"
            style={{
              backgroundImage: "url(/grid-1.jpg)",
              boxShadow: `inset 0 0 0 2px var(--selection)`,
            }}
          />
          <div className="text-2">Troopie Loop</div>
          <div className="text-1 text-[--text-600]">512×512</div>
        </div>
        <div>
          <div
            className="rounded-3 w-[138px] h-[138px] mb-1"
            style={{ backgroundImage: "url(/grid-2.jpg)" }}
          />
          <div className="text-2">Milkey Rave</div>
          <div className="text-1 text-[--text-600]">512×512</div>
        </div>
        <div>
          <div
            className="rounded-3 w-[138px] h-[138px] mb-1"
            style={{ backgroundImage: "url(/grid-3.jpg)" }}
          />
          <div className="text-2">Gaze</div>
          <div className="text-1 text-[--text-600]">512×512</div>
        </div>
        <div>
          <div
            className="rounded-3 w-[138px] h-[138px] mb-1"
            style={{ backgroundImage: "url(/grid-4.jpg)" }}
          />
          <div className="text-2">Burning Orbet</div>
          <div className="text-1 text-[--text-600]">512×512</div>
        </div>
        <div>
          <div
            className="rounded-3 w-[138px] h-[138px] mb-1"
            style={{ backgroundImage: "url(/grid-5.jpg)" }}
          />
          <div className="text-2">Moon</div>
          <div className="text-1 text-[--text-600]">512×512</div>
        </div>
      </div>
    </div>
  );
}
