interface PentagonButtonProps {
    text: string
    onClick?: () => void
    size_h?: number
    size_w?: number
    size_text?: number
}

const PentagonButton = ({ text, onClick, size_h=48, size_w=180, size_text=24}: PentagonButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-center text-white hover:opacity-90 transition"
            style={{
                backgroundImage: `url('./button-bg.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                height: `${size_h}px`,
                width: `${size_w}px`,
                fontSize: `${size_text}px`
            }}
        >
            {text}
        </button>
    )
}

export default PentagonButton