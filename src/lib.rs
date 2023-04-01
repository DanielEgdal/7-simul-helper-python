use pyo3::prelude::*;
use pyo3::wrap_pyfunction;

use clock_app::*;

#[pyfunction]
fn get_memo(scr: String) -> PyResult<Vec<i8>> {
    Ok(run(scr as String))
}

#[pymodule]
fn clockapp_python(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(get_memo, m)?)?;

    Ok(())
}