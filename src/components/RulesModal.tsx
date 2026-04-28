'use client';

interface RulesModalProps {
  onClose: () => void;
}

export default function RulesModal({ onClose }: RulesModalProps) {
  const handleClose = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('syllogle_seen_rules', '1');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40">
      <div className="animate-modal-in bg-white rounded-2xl max-w-md w-full p-7 shadow-xl">
        <div className="flex items-start justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">How to Play</h2>
          <button
            onClick={handleClose}
            className="text-gray-300 hover:text-gray-500 transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <p>
            You&apos;ll see <strong>3–5 short statements</strong>. Decide: can they all be true at the same time?
          </p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border border-gray-200 rounded-xl p-3 bg-gray-50">
              <p className="font-semibold text-gray-900 mb-0.5">All can be true</p>
              <p className="text-gray-500 text-xs">Tap <strong>Consistent</strong></p>
            </div>
            <div className="border border-gray-200 rounded-xl p-3 bg-gray-50">
              <p className="font-semibold text-gray-900 mb-0.5">There&apos;s a contradiction</p>
              <p className="text-gray-500 text-xs">Tap <strong>Inconsistent</strong></p>
            </div>
          </div>

          {/* Example puzzle */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Example</p>
            </div>
            <div className="px-4 py-3 space-y-2">
              {[
                'All birds can fly.',
                'Penguins are birds.',
                'Penguins cannot fly.',
              ].map((text, i) => (
                <div key={i} className="text-sm flex items-start gap-2 text-gray-700">
                  <span className="text-gray-300 text-xs mt-0.5 shrink-0">{i + 1}.</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 space-y-1">
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-lg border border-gray-200 bg-white text-gray-400">Consistent</span>
                <span className="text-xs px-2 py-1 rounded-lg bg-gray-900 text-white">Inconsistent ✓</span>
              </div>
              <p className="text-xs text-gray-500">
                Penguins can&apos;t fly but are birds — so these can&apos;t all be true.
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-xs">
            Each day has <strong>5 puzzles</strong>. Puzzles test <strong>logic only</strong> — no obscure knowledge required.
          </p>
        </div>

        <button
          onClick={handleClose}
          className="mt-5 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-700 active:scale-[0.98] transition-all"
        >
          Let&apos;s go
        </button>
      </div>
    </div>
  );
}
