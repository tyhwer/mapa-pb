import Image from "next/image";
import googleMapsLogo from "./img/google-maps-logo.svg";
import googleEarthLogo from "./img/google-earth-logo.svg";
import escudoPedrobernardo from "./img/pedro-bernardo-escudo.svg";

export default function Home() {
  return (
    <main className="min-h-screen flex-col p-16 justify-center text-center">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">
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
      <div className="flex justify-center">
        <a
          className="pointer place-items-center gap-2 p-8"
          href="https://www.google.com/maps/d/viewer?mid=1YudHGaqYdKo3U5h77aSNWPFNbdE2Z8o&ll=40.251532545127446%2C-4.896492000000001&z=11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Maps
          <Image
            src={googleMapsLogo}
            alt="Google Maps Logo"
            width={100}
            height={90}
            className="pt-3"
          />
        </a>

        <a
          className="pointer place-items-center gap-2 p-8"
          href="https://earth.google.com/web/@40.241596,-4.9030115,840.35196644a,23819.66051302d,30y,0h,0t,0r/data=MigKJgokCiAxWXVkSEdhcVlkS28zVTVoNzdhU05XUEZOYmRFMlo4byAC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Earth
          <Image
            src={googleEarthLogo}
            alt="Google Earth Logo"
            width={100}
            height={90}
            className="pt-3"
          />
        </a>
      </div>
      <p>
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
      <p>Digitalizado por Gabriel González</p>
      <div className="flex justify-center">
        <Image
          src={escudoPedrobernardo}
          alt="Escudo Pedro Bernardo"
          width={100}
          height={90}
          className="pt-3"
        />
      </div>
    </main>
  );
}
