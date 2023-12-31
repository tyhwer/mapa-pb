import googleMapsLogo from "./img/google-maps-logo.svg";
import googleEarthLogo from "./img/google-earth-logo.svg";
import SelectorTile from "./components/SelectorTile/SelectorTile";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col p-8 sm:p-16 justify-center text-center bg-gradient-to-b from-white to-gray-100">
        <div className="container m-auto">
          <h1 className="text-2xl lg:text-4xl text-center font-bold text-lime-800 tracking-tighter">
            Mapa orográfico de Pedro Bernardo
          </h1>
          <h2 className=" text-xl lg:text-2xl text-center mt-5">
            - Una toponimia singular -
          </h2>
          <p className="text-xl mt-5">
            Mapa realizado conjuntamente por: <br />
            <span className="font-bold">
              Jesús Hernández, Jesús Sánchez y Jesús González
            </span>
          </p>

          <p className="mt-3 text-sm">Digitalizado por Gabriel González</p>

          <div className="max-w-screen-lg m-auto pt-5 text-left">
            <p className="mt-4">
              Este mapa orográfico de Pedro Bernardo es un compendio de nombres
              de parajes, caminos, fuentes, cuevas, eras… del término municipal
              de Pedro Bernardo.{" "}
              <strong>
                Con él pretendemos recoger el legado de parte de la cultura
                rural de nuestros antepasados.
              </strong>
            </p>

            <p className="mt-4">
              El fin principal de esta obra es conservarlo para las generaciones
              futuras, ya que las personas que atesoraban en su memoria toda
              esta sabiduría van desgraciadamente desapareciendo.
            </p>

            <p className="mt-4">
              Confiamos en haber llegado a tiempo de recuperar todo este legado,
              que de otra manera se habría perdido para siempre.
            </p>
          </div>
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
          <div className="max-w-4xl mx-auto">
            <div className="w-full aspect-w-16 aspect-h-9 mt-5 shadow-lg ">
              <iframe
                src={"https://www.youtube.com/embed/7_A9pa80w5g"}
                title={
                  "Mapa orográfico de Pedro Bernardo - Una toponimia singular"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
