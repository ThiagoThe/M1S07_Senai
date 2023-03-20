import GrupoInput from './grupoInput';
import { useState } from 'react';
import moment from 'moment';

function Formulario({quandoAdicionar}) {
    const [data, setData] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [valor, setValor] = useState(0);

    function criaNegociacao( {
        if (data === '' || quantidade === 0 || valor === 0) {
            alert ("Erro ao criar a negociação. Verifique se todos os campos foram preenchidos.");
        } else {
            const negociacao = {
                dataNegociacao: moment(data, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                quantidadeNegociacao: quantidade,
                valorNegociacao: valor
            };
            quandoAdicionar(negociacao);

            console.log(negociacao: ${JSON.stringify(negociacao)});
            setData("");
            setQuantidade(0);
            setValor(0);
        }
    }
    return (
        <div className = "py-5">
            <form className='form conatainer form'>
            <div className="row justify-content-around">
            <div className="form-group col">
              <GrupoInput
                etiqueta="Data"
                htmlFor="data"
                tipo="date"
                min={1}
                step={1}
                id="data"
                valor={data}
                aoDigitar={(event) => setData(event.target.value)}
              />
            </div>
            <div className="form-group col">
              <GrupoInput
                etiqueta="Quantidade"
                htmlFor="quantidade"
                tipo="number"
                min={1}
                step={1}
                id="quantidade"
                valor={quantidade}
                aoDigitar={(event) => setQuantidade(event.target.valueAsNumber)}
              />
            </div>
  
            <div className="form-group col">
              <GrupoInput
                etiqueta="Valor"
                htmlFor="valor"
                tipo="number"
                min={0.01}
                step={0.01}
                id="valor"
                valor={valor}
                aoDigitar={(event) => setValor(event.target.valueAsNumber)}
              />
            </div>
  
            <div className="col-1 d-flex align-items-end justify-content-end">
              <button
                className="btn btn-primary"
                type="button"
                onClick={criaNegociacao}
              >
                Incluir
              </button>
            </div>
          </div>
            </form>
        </div>
    )
}

export default Formulario;