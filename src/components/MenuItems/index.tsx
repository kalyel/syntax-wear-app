const menus = [
  { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Outlet", items: ["Masculino", "Feminino"] },
  { title: "Nossas lojas", items: ["Loja física", "Loja online"] },
  { title: "Sobre", items: ["Quem somos", "Missão"] },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-2">
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-medium hover:text-text-tertiary transition-colors text-xl"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
