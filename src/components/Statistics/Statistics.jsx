import PropTypes from "prop-types";

import getRandomHexColor from "../features/getRandomColor";
import css from './statistics.module.css';


const Statistics = ({ title, stats }) => {
    const elements = stats.map(item =>
        <li key={item.id} className={css.item} style={{ backgroundColor: getRandomHexColor()}
}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span>
            </li>);

    return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat_list}>
            {elements}
        </ul>
    </section>
    )
}

export default Statistics;

Statistics.defaultProps = {
    stats: [],
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}