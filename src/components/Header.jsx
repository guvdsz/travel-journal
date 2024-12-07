import globeImg from "../assets/Globe.png"
export default function Header() {
    return (
        <header>
            <img src={globeImg} alt="Globe" />
            <h1>travel journal</h1>
        </header>
    )
}