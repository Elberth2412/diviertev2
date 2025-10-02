import { useEffect, useState } from "react";
import { auth, googleProvider, db } from "../firebase/config";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import logo from '../assets/icon_principal.png';

const Navbar = () => {

    const [usuario, setUsuario] = useState(null);

    // Función para guardar usuario en Firestore
    const guardarUsuarioEnFirestore = async (user) => {
        const ref = doc(db, "usuarios", user.uid);
        const existe = await getDoc(ref);

        if (!existe.exists()) {
            await setDoc(ref, {
                uid: user.uid,
                nombre: user.displayName,
                correo: user.email,
                creado: new Date(),
                progreso: 0, // al comienzo
            });
            console.log("Usuario nuevo guardado en Firestore");
        } else {
            console.log("Usuario ya existe en Firestore");
        }
    };

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUsuario(user);
        });
        return () => unsub();
    }, []);

    const login = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            await guardarUsuarioEnFirestore(res.user);
            console.log("usuario", res.user)
        } catch (error) {
            console.error("Error al iniciar sesión", error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <nav>
            <nav className="bg-white m-4 rounded-xl border-gray-200 dark:bg-gray-500">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-11" alt="icon" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DIVIERTE-FINANCE</span>
                    </Link>
                    {   usuario ?
                        (
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">   
                                <p className="text-sm  text-gray-500 dark:text-white">
                                    {(usuario.displayName).toUpperCase()}
                                </p>
                                <button className="text-sm  text-black-800 dark:text-black-500 hover:underline" onClick={logout}>
                                    CERRAR SESION
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                                <button className="text-sm  text-black-800 dark:text-black-500 hover:underline" onClick={login}>
                                    INICIAR SESION
                                </button>
                            </div>
                        )
                    }
                </div>
            </nav>

        </nav>
    );
}

export default Navbar;