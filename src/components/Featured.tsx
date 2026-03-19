export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/2a7eb672-42f4-4e31-b0bd-1f712d39ece1/files/d8a71e07-9ba9-47bd-8f0f-6d4f8073270d.jpg"
          alt="Химическая лаборатория"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ключевые отрасли химпрома</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Нефтехимия, производство удобрений, полимеры, фармацевтика — разберём каждую отрасль с нуля:
          от сырья и реакций до готового продукта и роли в экономике России.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Изучить темы
        </button>
      </div>
    </div>
  );
}