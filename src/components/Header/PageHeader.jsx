import './PageHeaderStyle.scss';

function PageHeader() {
    return (
        <header>
            <div className="colHeader">
                <a href='/' className="brand">Kiwinance</a>
            </div>
            <ul className="colheader desktop">
                <li className="menuItem"></li>
            </ul>
        </header>
    );
};

export default PageHeader;