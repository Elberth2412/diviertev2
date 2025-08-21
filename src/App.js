import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./services/AuthContext";
import PrivateRoute from "./componentes/privateRouter";

import Navbar from "./componentes/navBar";
import Hitos from "./modulos/hitos/hitos";
import Simulador from "./componentes/simulador";
import Estadisticas from "./componentes/estadisticas";
import Home from "./home/home";
import Footer from "./componentes/footer";
import Login from "./login/login";

import HitoConceptosBasicos from "./modulos/hitos/hitoConceptosBasicos";
import HitoValorRiesgo from "./modulos/hitos/hitoValorRiesgo.js";
import HitoFactoresRiesgo from "./modulos/hitos/hitoFactoresRiesgo";
import HitoEstadisticasBasicas from "./modulos/hitos/hitoEstadisticasBasicas";
import HitoRendimientoHistorico from "./modulos/hitos/hitoRendimientoHistorico";
import HitoVarSimulacion from "./modulos/hitos/hitoVarSimulacion";
import HitoVarPortafolios from "./modulos/hitos/hitoVarPortafolios";
import HitoVarInterpretacion from "./modulos/hitos/hitoVarInterpretacion";

function CondicionalPage() {
  const { usuario } = useAuth();
  return usuario ? <Home /> : <Login />;
}

function App() {

  return (
    <main>
      <Router>

        <AuthProvider>
          <Navbar
          />
          <Routes>
            {/*RUTAS PUBLICAS*/}
            <Route path="/" element={<CondicionalPage />} />

            {/*RUTAS PRIVADAS*/}
            <Route path="/simulador" element={<PrivateRoute><Simulador /></PrivateRoute>} />
            <Route path="/hitos" element={<PrivateRoute><Hitos /></PrivateRoute>} />
            <Route path="/estadisticas" element={<PrivateRoute><Estadisticas /></PrivateRoute>} />

            {/*RUTAS - HITOS*/}
            <Route path="/hitos/ConceptosBasicos" element={<PrivateRoute> <HitoConceptosBasicos/> </PrivateRoute>} />
            <Route path="/hitos/ValorRiesgo" element={<PrivateRoute> <HitoValorRiesgo/> </PrivateRoute>} />
            <Route path="/hitos/FactoresRiesgo" element={<PrivateRoute> <HitoFactoresRiesgo/> </PrivateRoute>} />
            <Route path="/hitos/EstadisticasBasicas" element={<PrivateRoute> <HitoEstadisticasBasicas/> </PrivateRoute>} />
            <Route path="/hitos/RendimientoHistorico" element={<PrivateRoute> <HitoRendimientoHistorico/> </PrivateRoute>} />
            <Route path="/hitos/VarSimulacion" element={<PrivateRoute> <HitoVarSimulacion/> </PrivateRoute>} />
            <Route path="/hitos/VarPortafolios" element={<PrivateRoute> <HitoVarPortafolios/> </PrivateRoute>} />
            <Route path="/hitos/VarInterpretacion" element={<PrivateRoute> <HitoVarInterpretacion/> </PrivateRoute>} />


          </Routes>

          <Footer
          />
        </AuthProvider>


      </Router>

    </main>
  );

}

export default App;
