import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por
                <a href="https://www.instagram.com/gustav.oliveira_/"> 
                  <strong> @gustav.oliveira_</strong>
                </a>
            </p>
        </div>
    </header>
  )
}
