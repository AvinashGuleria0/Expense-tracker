const User = require("../models/User");
const Income = require("../models/Income");

exports.addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fileds required" });
    }

    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    res.status(200).json({ newIncome: newIncome });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

exports.getAllIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ data: -1 });
    res.json(income);
  } catch (err) {
    res.status(500).json({ message: `Internal server Error`, error: err });
  }
};

exports.deleteIncome = async (req, res) => {};

exports.downloadIncomeExcel = async (req, res) => {};
