import "../styles/footer.css"


export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            © {currentYear} <a href="https://www.github.com/fateassassin">Muaz Ugur</a>
        </footer>
    );
}