import PropTypes from "prop-types";
import css from './statistics.module.css';


const Statistics = ({ title, stats }) => { 
    const elements = stats.map(item => <li key={item.id}>{item.percentage}</li>);

    return (
    <section class="statistics">
        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">
            <li class="item">
                <span class="label">.docx</span>
                <span class="percentage">4%</span>
            </li>
            <li class="item">
                <span class="label">.mp3</span>
                <span class="percentage">14%</span>
            </li>
            <li class="item">
                <span class="label">.pdf</span>
                <span class="percentage">41%</span>
            </li>
            <li class="item">
                <span class="label">.mp4</span>
                <span class="percentage">12%</span>
            </li>
        </ul>
    </section>
    )
}