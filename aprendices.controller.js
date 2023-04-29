import { Pool } from "../BD.js";

export const getAprendices = async (req, res) => {
  try {
    const [result] = await Pool.query("SELECT * FROM usuarios ORDER BY id DESC");
    console.log("resultado: " + result[0]);
    res.json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const getAprendiz = async (req, res) => {
  try {
    const [result] = await Pool.query("SELECT * FROM usuarios WHERE id=?", [req.params.id]);
    if (result.length === 0) {
      return res.status(404).json({ message: "aprendiz not found" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const createAprendiz = async (req, res) => {
  try {
    const { nombre, cedula, celular } = req.body;
    const [result] = await Pool.query("INSERT INTO usuarios(nombre, cedula, celular) VALUES(?,?,?)", [nombre, cedula, celular]);
    res.json({
      id: result.insertId,
      nombre,
      cedula,
      celular,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const editAprendiz = async (req, res) => {
  try {
    const { nombre, cedula, celular } = req.body;
    const [result] = await Pool.query("UPDATE usuarios SET ? WHERE id=?", [req.body, req.params.id]);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteAprendiz = async (req, res) => {
  try {
    const [] = await Pool.query("DELETE FROM usuarios WHERE id=?", [req.params.id]);
    return res.status(200).json({ message: "usuario eliminado" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};