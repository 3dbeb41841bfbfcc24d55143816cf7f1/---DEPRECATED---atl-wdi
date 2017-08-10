import React, {Component} from 'react';

class NewDebitForm extends Component {

  constructor(props) {
    super(props);

    this.defaultState = {
      newDebit: {
        amount: 0.00,
        description: '',
        date: Date.now(),
      },
    };

    this.state = {...this.defaultState};
  }

  _handleInputChange = (event) => {
    const attribute = event.target.name;
    let value = event.target.value;

    if(attribute === 'amount') {
      value = Number(value);
    }

    const newDebit = {...this.state.newDebit};
    newDebit[attribute] = value;

    this.setState({newDebit});
  };

  _resetForm = () => {
    const newDebit = {...this.defaultState.newDebit};
    this.setState({newDebit});
  };

  _addNewDebit = (event) => {
    event.preventDefault();
    this.props.addNewDebit(this.state.newDebit);
    this._resetForm();
  };

  render() {
    return (
        <div>
          <form onSubmit={this._addNewDebit}>

            <div>
              <span>Amount (USD) </span>
              <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={this.state.newDebit.amount}
                  onChange={this._handleInputChange}/>
            </div>

            <div>
              <span>Description </span>
              <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.state.newDebit.description}
                  onChange={this._handleInputChange}/>
            </div>

            <div>
              <input
                  type="submit"
                  value="Add New Debit"/>
            </div>

          </form>
        </div>
    );
  }
}

export default NewDebitForm;
