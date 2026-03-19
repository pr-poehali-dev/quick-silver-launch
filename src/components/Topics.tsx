const topics = [
  {
    icon: "🛢️",
    title: "Нефтехимия",
    description: "Переработка нефти и газа, крекинг, получение бензина, пластмасс и синтетических волокон.",
  },
  {
    icon: "🌱",
    title: "Производство удобрений",
    description: "Азотные, фосфорные и калийные удобрения. Синтез аммиака, производство карбамида и нитратов.",
  },
  {
    icon: "🧪",
    title: "Полимеры и пластики",
    description: "Полиэтилен, полипропилен, каучук. Реакции полимеризации и поликонденсации в промышленности.",
  },
  {
    icon: "💊",
    title: "Фармацевтика",
    description: "Синтез лекарственных веществ, антибиотики, витамины. Химия на службе здоровья.",
  },
  {
    icon: "🏗️",
    title: "Силикатная промышленность",
    description: "Производство стекла, цемента, керамики. Силикаты в строительстве и технологиях.",
  },
  {
    icon: "⚗️",
    title: "Металлургия",
    description: "Выплавка чугуна и стали, электролиз металлов, коррозия и методы защиты.",
  },
];

export default function Topics() {
  return (
    <section id="topics" className="bg-neutral-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Программа курса</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Ключевые темы<br />химической промышленности
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white border border-neutral-200 p-8 hover:border-neutral-900 transition-colors duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:underline">
                {topic.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
