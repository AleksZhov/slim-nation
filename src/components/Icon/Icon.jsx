import icons from 'images/icons.svg';

const Icon = ({ iconName, onClick, className, width, height }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            onClick={onClick}
        >
            <use href={`${icons}#${iconName}`} />
        </svg>
    );
};

export default Icon;
