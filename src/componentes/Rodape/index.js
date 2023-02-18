import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape-principal'>
            <div className='redes'>
                <a target={'_blank'} href='https://github.com/allessandrogomes' ><img id='gh' src='./imagens/github-icon.png'/></a>
                <a target={'_blank'} href='https://www.linkedin.com/in/alessandro-da-silva-gomes-a82286240/' ><img id='lk' src='./imagens/linkedin-icon.png'/></a>
                <a target={'_blank'} href='https://www.instagram.com/allesssandro_gomes/' ><img id='ig' src='./imagens/ig.png'/></a>
            </div>
            <img id='org' src='./imagens/logo.png' />
            <h4 className='texto__rodape'>Desenvolvido por Alessandro Gomes</h4>
        </footer>
    )
}

export default Rodape