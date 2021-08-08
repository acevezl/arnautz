const Nav = ( props ) => {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return(
        <header className='flex-row sticky-top'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid nav-wrapper'>
                    <span data-testid='home' className='navbar-brand' onClick={ () => { setCurrentCategory('Home') } }>	Luis Arnaut </span>
                    
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            { categories.map ( ( category ) => (
                                <li className='mx-1 nav-item' key={ category }>
                                    <span onClick={
                                        () => {
                                            setCurrentCategory(category);
                                        }
                                    } className={`nav-link ${ currentCategory=== category && 'active'}`}> { category } </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Nav;