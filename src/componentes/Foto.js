
import React, { Component} from 'react'

class FotoHeader extends Component{
    render(){
        return(
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src={this.props.foto.urlPerfil}  alt="foto do usuario"/>
                    <figcaption className="foto-usuario">
                        <a href="#">{this.props.foto.loginUsuario}</a> 
                    </figcaption>
                </figure>

                <time className="foto-data">{this.props.foto.horario}</time>
            </header>
        );
    }
}

class FotoInfo extends Component{
    render(){
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {
                        this.props.foto.likers.map( l => <a href="#">l </a>)
                    }
                    curtiram
                </div>
                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
                </p>
                <ul className="foto-info-comentarios">
                    <li className="comentario">
                    <a className="foto-info-autor">seguidor </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                    </li>
                    <li className="comentario">
                    <a className="foto-info-autor">seguidor </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                    </li>
                    <li className="comentario">
                    <a className="foto-info-autor">seguidor </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                    </li>
                </ul>
            </div>
        );
    }
}

class FotoAtualizacoes extends Component{
    render(){
        return(
            <section className="fotoAtualizacoes">
                <a href="#" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>
            </section>
        );
    }
}

export default class Foto extends Component{    
    render(){
        return(
            <div className="foto">
                <FotoHeader foto={this.props.foto}></FotoHeader>
                <img alt="foto" className="foto-src" src={this.props.foto.urlFoto}/>
                <FotoInfo foto={this.props.foto}></FotoInfo>
                <FotoAtualizacoes></FotoAtualizacoes>
          </div>
        );
    }
}