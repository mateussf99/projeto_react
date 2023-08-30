import './style.css';
import PropTypes from 'prop-types';
import user from '../../assets/img/user.svg';
import add from '../../assets/img/add.svg'


function Materias({ materia }) {
    return (
        <div className='container'>
            <header className='materia_title'>
                <img src={add} />
                <h2>
                    {materia.name}
                </h2>
                <div/>
            </header>
            <div className='question_container'>
                {materia.posts.map((post, index) => (
                    <div key={index} className='question'>
                        <header>
                            <img src={user} />
                            <h3>{post.title}</h3>
                        </header>
                        <p>{post.description}</p>

                    </div>
                ))}
            </div>

        </div>
    );
}

Materias.propTypes = {
    materia: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        posts: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                userId: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Materias;