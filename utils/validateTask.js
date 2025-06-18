const validateTask = (req, res, next) => {
  const { title, description, date, time } = req.body;
  if (!title || !description || !date || !time) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  next();
};

export default validateTask;
