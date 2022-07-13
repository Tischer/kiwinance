import './PageHeaderStyle.scss';
import MenuDesktop from './HeaderMenu/MenuDesktop';
import MenuMobille from './HeaderMenu/MenuMobille';

function PageHeader() {
    const screen_size = Screen.width;
    console.log(screen_size);
    return (
        <header>
            <div className="logoHeader">
                <a href='/' className="brand">Kiwinance</a>
            </div>
            <MenuDesktop />
        </header>
    );
};

export default PageHeader;