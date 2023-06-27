import googleMapsLogo from "./img/google-maps-logo.svg";
import googleEarthLogo from "./img/google-earth-logo.svg";
import SelectorTile from "./components/SelectorTile/SelectorTile";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col p-8 sm:p-16 justify-center text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-2xl lg:text-4xl text-center font-bold text-lime-700">
          Mapa orográfico de Pedro Bernardo
        </h1>
        <h2 className=" text-xl lg:text-2xl text-center mt-5">
          Una toponimia singular
        </h2>
        <p className="text-xl mt-5">
          Mapa realizado conjuntamente por: <br />
          <span className="font-bold">
            Jesús Hernández, Jesús Sánchez y Jesús González
          </span>
        </p>

        <p className="mt-3 text-sm">Digitalizado por Gabriel González</p>

        <div className="flex flex-col sm:flex-row justify-center mt-5">
          <SelectorTile
            title="Google Maps"
            logoImage={googleMapsLogo}
            description="Google Maps es más adecuado para dispositivos móviles, pero no muestra las
      etiquetas de los puntos del mapa hasta que se seleccionan."
            link="https://www.google.com/maps/d/viewer?mid=1YudHGaqYdKo3U5h77aSNWPFNbdE2Z8o&ll=40.251532545127446%2C-4.896492000000001&z=11"
          />

          <SelectorTile
            title="Google Earth"
            logoImage={googleEarthLogo}
            description="Google Earth proporciona una mejor experiencia para ordenadores de
        sobremesa, y muestra toda la información posible en todo momento."
            link="https://earth.google.com/web/@40.241596,-4.9030115,840.35196644a,23819.66051302d,30y,0h,0t,0r/data=MigKJgokCiAxWXVkSEdhcVlkS28zVTVoNzdhU05XUEZOYmRFMlo4byAC"
          />
        </div>

        <p className="py-3">
          Rutas de Senderismo:{" "}
          <a
            href="http://www.xn--geodiseos-r6a.com/pedro-bernardo-unico/"
            target="_blank"
            className="text-blue-500"
          >
            Pedro Bernardo Único (Geodiseños)
          </a>
        </p>
        <p>
          GR180:{" "}
          <a
            href="http://www.cedertietar.es/documentos.php"
            target="_blank"
            className="text-blue-500"
          >
            Cedertietar
          </a>
        </p>
      </main>
    </>
  );
}
