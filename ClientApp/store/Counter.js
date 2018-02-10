/* @flow */

import type { Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export type CounterState = {
    +count: number;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

type IncrementCountAction = { type: 'INCREMENT_COUNT' };
type DecrementCountAction = { type: 'DECREMENT_COUNT' };

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = IncrementCountAction | DecrementCountAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    increment: function() : IncrementCountAction { return { type: 'INCREMENT_COUNT' }},
    decrement: function() : DecrementCountAction { return { type: 'DECREMENT_COUNT' }}
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer = (state: CounterState, action: KnownAction) : CounterState  => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            (action: empty);
            return state || { count: 0 };
    }
};
