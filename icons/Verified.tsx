interface Props {
  width?: number
  height?: number
  color?: string
}

const VerifiedIcon = ({
  width = 16,
  height = 16,
  color = '#3BA65D',
}: Props) => (
  <svg
    version="1.1"
    style={{ width, height }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    x="0px"
    y="0px"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M14.9,7.9l-4.2,6.3l-2-2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.2l2.7,2.7l0.1,0.1
	c0.1,0.1,0.3,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.4l4.8-7.2v0c0.3-0.4,0.2-0.9-0.2-1.1C15.7,7.5,15.2,7.6,14.9,7.9z"
    />
    <path
      fill={color}
      d="M21.2,8.6c0.2-0.5,0.3-1,0.3-1.5c0-2.4-1.9-4.4-4.2-4.4c-0.5,0-1,0.1-1.5,0.3c-0.7-1.5-2.1-2.5-3.8-2.5
	s-3.1,1-3.8,2.5c-0.5-0.2-1-0.3-1.5-0.3c-2.3,0-4.2,2-4.2,4.4c0,0.5,0.1,1.1,0.3,1.5c-1.4,0.7-2.4,2.2-2.4,4c0,1.7,0.9,3.1,2.1,3.9
	c0,0.2,0,0.4,0,0.6c0,2.4,1.9,4.4,4.2,4.4c0.5,0,1-0.1,1.5-0.3c0.7,1.5,2.1,2.5,3.8,2.5c1.7,0,3.1-1,3.8-2.5c0.5,0.2,1,0.3,1.5,0.3
	c2.3,0,4.2-2,4.2-4.4c0-0.2,0-0.4,0-0.6c1.3-0.8,2.1-2.2,2.1-3.9v0C23.6,10.8,22.6,9.3,21.2,8.6z M16.3,8.9L16.3,8.9l-4.8,7.2
	c-0.2,0.2-0.4,0.4-0.7,0.4c-0.2,0-0.3,0-0.5-0.1l-0.1-0.1l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.2c0.3-0.3,0.8-0.3,1.2,0l2,2l4.2-6.3
	c0.3-0.4,0.8-0.5,1.1-0.2C16.4,8,16.5,8.5,16.3,8.9z"
    />
  </svg>
)

export default VerifiedIcon
