interface SkeletonProps {
  classes: string;
}

import './Skeleton.css';

const Skeleton = ({ classes }: SkeletonProps) => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};
export default Skeleton;
