import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => {
    return(
        <aside>
            {modules.map(m => {
                return(
                    <div key={m.id}>
                        <strong>{m.title}</strong>
                        <ul>
                            {m.lessons.map(l => {
                                return(
                                    <li key={l.id}>{l.title}
                                        <button onClick={() => toggleLesson(m, l)}>
                                            Selecionar
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </aside>
    )
}

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch);

//const mapDispatchToProps = dispatch => ({
//    toggleLesson: (m, l) => dispatch(CourseActions.toggleLesson(m, l))
//});

export default connect( mapStateToProps, mapDispatchToProps )(Sidebar);