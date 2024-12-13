const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap justify-between  p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://www.silofortune.com/wp-content/uploads/2024/07/silo.png" alt="silo fortune" className="w-30 h-10" />
                </a>
                <button className="inline-flex items-center bg-yellow-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogOut
                </button>
            </div>
        </header>
    )
}

export default Navbar
