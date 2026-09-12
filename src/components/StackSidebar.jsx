import React from 'react';

export default function StackSidebar({ stack, onRemove, onClearAll }) {
  return (
    <aside className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs sticky top-20">
      <h2 className="text-xl font-extrabold text-slate-900 mb-0.5">Your Stack</h2>
      <p className="text-xs text-slate-400 mb-6">
        {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-2xl py-12 px-4 text-center">
          <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-gray-100 rounded-2xl p-3.5 bg-white shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">{item.name}</h4>
                    <span className="text-[10px] text-slate-400">{item.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-gray-600 p-1 text-sm transition-colors"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onClearAll}
            className="w-full py-2.5 rounded-2xl border border-rose-200 text-rose-500 font-bold text-xs hover:bg-rose-50 transition-colors mt-4"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}