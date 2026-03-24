interface Props {
  titulo: string;
  completado: boolean;
}

function Card({ titulo, completado }: Props) {
  return (
    <div style={{ margin: '40px' }} className="container">
        <h4>{titulo}</h4>
        <p>{completado ? "Completado" : "Por hacer"}</p>
    </div>
  )
}

export default Card