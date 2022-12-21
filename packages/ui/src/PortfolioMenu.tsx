import "./styles.css";

export const PortfolioMenu = () => {
    return (
        <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-gray-800 px-2">
            <h3 className="text-left text-white text-2xl font-bold py-2 px-4">
                Portfolio de Trabajos
            </h3>
            <div className="pylarDiv">
                <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
                    <a className="text-center" href="/portfolio/blackholes">
                        BlackHoles
                    </a>
                </button>
                <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
                    <a className="text-center" href="/portfolio/human">
                        Human
                    </a>
                </button>
                <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
                    <a className="text-center" href="/portfolio/box">
                        Box
                    </a>
                </button>
                <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
                    <a className="text-center" href="/portfolio/cats">
                        Cats
                    </a>
                </button>
            </div>
        </div>
    );
};
