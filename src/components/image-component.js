import Image from "next/legacy/image";
import PropTypes from 'prop-types';

const NextImage = (props) => {
    const {
        src,
        alt = "alt Image",
        className = '',
        width,
        height,
        sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        priority = true,
    } = props;

    return (
        <div
            className={className}
            style={{
                position: 'relative',
                ...(width ? { width: `${width}` } : {}),
                ...(height ? { height: `${height}` } : {}),
            }}
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                sizes={sizes}  // Dynamically set the image size
                priority={priority}
                objectFit="contain" // Adjust object fit as needed
            />
        </div>
    );
};

NextImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sizes: PropTypes.string,
    priority: PropTypes.bool,
};

export default NextImage;