import React, {
    useState,
    useEffect,
    Dispatch,
    createContext,
    useReducer,
    useContext,
} from 'react';
import {api_item_types} from '@global_types';

// STATE TYPES
export interface State {
    step: number;
    lifeArray: api_item_types.lifeArrayItem | null;
    charTrgterArrayList: api_item_types.charTrgterArrayItem[];
    obstKiArrayList: api_item_types.obstKiArrayItem[];
    obstAbtArray: api_item_types.obstAbtArrayItem | null;
    trgterIndvdlArrayList: api_item_types.trgterIndvdlArrayItem[];
    desireArrayList: api_item_types.desireArrayItem[];
}
export const initialState: State = {
    step: 0,
    lifeArray: null,
    charTrgterArrayList: [],
    obstKiArrayList: [],
    obstAbtArray: null,
    trgterIndvdlArrayList: [],
    desireArrayList: [],
};

//	**
//	Action Types
//	**

// step : 단계
export const SET_STEP = 'survey/CHANGE_STEP' as const;

// lifeArray : 생애 주기
export const SET_LIFE_ARRAY = 'survey/SET_LIFE_ARRAY' as const;

// charTrgterArrayList : 대상 특성 리스트
export const SET_CHAR_TRGTER_ARRAY_LIST =
    'survey/SET_CHAR_TRGTER_ARRAY_LIST' as const;
export const ADD_CHAR_TRGTER_ARRAY = 'survey/ADD_CHAR_TRGTER_ARRAY' as const;
export const REMOVE_CHAR_TRGTER_ARRAY =
    'survey/REMOVE_CHAR_TRGTER_ARRAY' as const;

// obstKiArrayList : 장애 유형 리스트
export const SET_OBST_KI_ARRAY_LIST = 'survey/SET_OBST_KI_ARRAY_LIST' as const;
export const ADD_OBST_KI_ARRAY = 'survey/ADD_OBST_KI_ARRAY' as const;
export const REMOVE_OBST_KI_ARRAY = 'survey/REMOVE_OBST_KI_ARRAY' as const;

// obstAbtArray : 장애 유형
export const SET_OBST_ABT_ARRAY = 'survey/SET_OBST_ABT_ARRAY' as const;

// trgterIndvdlArrayList : 가구 유형 리스트
export const SET_TRGTER_INDVDL_ARRAY_LIST =
    'survey/SET_TRGTER_INDVDL_ARRAY_LIST' as const;
export const ADD_TRGTER_INDVDL_ARRAY =
    'survey/ADD_TRGTER_INDVDL_ARRAY' as const;
export const REMOVE_TRGTER_INDVDL_ARRAY =
    'survey/REMOVE_TRGTER_INDVDL_ARRAY' as const;

// desireArrayList : 욕구 리스트
export const SET_DESIRE_ARRAY_LIST = 'survey/SET_DESIRE_ARRAY_LIST' as const;
export const ADD_DESIRE_ARRAY = 'survey/ADD_DESIRE_ARRAY' as const;
export const REMOVE_DESIRE_ARRAY = 'survey/REMOVE_DESIRE_ARRAY' as const;
// STEP
export const setStep = (stepNumber: number) => ({
    type: SET_STEP,
    stepNumber: stepNumber,
});

// LIFE_ARRAY
export const setLifeArray = (lifeArray: State['lifeArray']) => ({
    type: SET_LIFE_ARRAY,
    lifeArray: lifeArray,
});

// CHAR_TRGTER_ARRAY_LIST
export const setCharTrgterArrayList = (
    charTrgterArrayList: State['charTrgterArrayList'],
) => ({
    type: SET_CHAR_TRGTER_ARRAY_LIST,
    charTrgterArrayList: charTrgterArrayList,
});
export const addCharTrgterArray = (
    charTrgterArray: api_item_types.charTrgterArrayItem,
) => ({
    type: ADD_CHAR_TRGTER_ARRAY,
    charTrgterArray,
});
export const removeCharTrgterArray = (idx: number) => ({
    type: REMOVE_CHAR_TRGTER_ARRAY,
    idx: idx,
});

// OBST_KI_ARRAY_LIST
export const setObstKiArrayList = (
    obstKiArrayList: State['obstKiArrayList'],
) => ({
    type: SET_OBST_KI_ARRAY_LIST,
    obstKiArrayList: obstKiArrayList,
});
export const addObstKiArray = (
    obstKiArray: api_item_types.obstKiArrayItem,
) => ({
    type: ADD_OBST_KI_ARRAY,
    obstKiArray,
});
export const removeObstKiArray = (idx: number) => ({
    type: REMOVE_OBST_KI_ARRAY,
    idx: idx,
});

// OBST_ABT_ARRAY
export const setObstAbtArray = (obstAbtArray: State['obstAbtArray']) => ({
    type: SET_OBST_ABT_ARRAY,
    obstAbtArray: obstAbtArray,
});

// TRGTER_INDVDL_ARRAY_LIST
export const setTrgterIndvdlArrayList = (
    trgterIndvdlArrayList: State['trgterIndvdlArrayList'],
) => ({
    type: SET_TRGTER_INDVDL_ARRAY_LIST,
    trgterIndvdlArrayList: trgterIndvdlArrayList,
});
export const addTrgterIndvdlArray = (
    trgterIndvdlArrayList: api_item_types.trgterIndvdlArrayItem,
) => ({
    type: ADD_TRGTER_INDVDL_ARRAY,
    trgterIndvdlArrayList,
});
export const removeTrgterIndvdlArray = (idx: number) => ({
    type: REMOVE_TRGTER_INDVDL_ARRAY,
    idx: idx,
});

// DESIRE ARRAY LIST
export const setDesireArrayList = (
    desireArrayList: State['desireArrayList'],
) => ({
    type: SET_DESIRE_ARRAY_LIST,
    desireArrayList: desireArrayList,
});
export const addDesireArray = (
    desireArray: api_item_types.desireArrayItem,
) => ({
    type: ADD_DESIRE_ARRAY,
    desireArray,
});
export const removeDesireArray = (idx: number) => ({
    type: REMOVE_DESIRE_ARRAY,
    idx: idx,
});
export type Action = ReturnType<
    | typeof setStep
    | typeof setLifeArray
    | typeof setCharTrgterArrayList
    | typeof addCharTrgterArray
    | typeof removeCharTrgterArray
    | typeof setObstKiArrayList
    | typeof addObstKiArray
    | typeof removeObstKiArray
    | typeof setObstAbtArray
    | typeof setTrgterIndvdlArrayList
    | typeof addTrgterIndvdlArray
    | typeof removeTrgterIndvdlArray
    | typeof setDesireArrayList
    | typeof addDesireArray
    | typeof removeDesireArray
>;
type SurveyDisaptch = Dispatch<Action>; // 이 부분!
const SurveyDispatchContext = createContext<SurveyDisaptch | undefined>(
    undefined,
);
// CONTEXT
const SurveyStoreContext = React.createContext<State | null>(null);

// REDUCER
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case SET_STEP: {
            return {
                ...state,
                step: action.stepNumber,
            };
        }
        case SET_LIFE_ARRAY: {
            return {
                ...state,
                lifeArray: action.lifeArray,
            };
        }
        case SET_CHAR_TRGTER_ARRAY_LIST: {
            return {
                ...state,
                charTrgterArrayList: action.charTrgterArrayList,
            };
        }
        case ADD_CHAR_TRGTER_ARRAY: {
            const newList = state.charTrgterArrayList.slice();
            newList.push(action.charTrgterArray);
            return {
                ...state,
                charTrgterArrayList: newList,
            };
        }
        case REMOVE_CHAR_TRGTER_ARRAY: {
            const newList = state.charTrgterArrayList.slice();
            newList.splice(action.idx, 1);
            return {
                ...state,
                charTrgterArrayList: newList,
            };
        }
        case SET_OBST_KI_ARRAY_LIST: {
            return {
                ...state,
                obstKiArrayList: action.obstKiArrayList,
            };
        }
        case ADD_OBST_KI_ARRAY: {
            const newList = state.obstKiArrayList.slice();
            newList.push(action.obstKiArray);
            return {
                ...state,
                obstKiArrayList: newList,
            };
        }
        case REMOVE_OBST_KI_ARRAY: {
            const newList = state.obstKiArrayList.slice();
            newList.splice(action.idx, 1);
            return {
                ...state,
                obstKiArrayList: newList,
            };
        }
        case SET_OBST_ABT_ARRAY: {
            return {
                ...state,
                obstAbtArray: action.obstAbtArray,
            };
        }
        case SET_TRGTER_INDVDL_ARRAY_LIST: {
            return {
                ...state,
                trgterIndvdlArrayList: action.trgterIndvdlArrayList,
            };
        }
        case ADD_TRGTER_INDVDL_ARRAY: {
            const newList = state.trgterIndvdlArrayList.slice();
            newList.push(action.trgterIndvdlArrayList);
            return {
                ...state,
                trgterIndvdlArrayList: newList,
            };
        }
        case REMOVE_TRGTER_INDVDL_ARRAY: {
            const newList = state.trgterIndvdlArrayList.slice();
            newList.splice(action.idx, 1);
            return {
                ...state,
                trgterIndvdlArrayList: newList,
            };
        }
        case SET_DESIRE_ARRAY_LIST: {
            return {
                ...state,
                desireArrayList: action.desireArrayList,
            };
        }
        case ADD_DESIRE_ARRAY: {
            const newList = state.desireArrayList.slice();
            newList.push(action.desireArray);
            return {
                ...state,
                desireArrayList: newList,
            };
        }
        case REMOVE_DESIRE_ARRAY: {
            const newList = state.desireArrayList.slice();
            newList.splice(action.idx, 1);
            return {
                ...state,
                desireArrayList: newList,
            };
        }
        default:
            return state;
    }
};

export const SurveyStoreProvider = ({children}: {children: JSX.Element}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const store = {
        state,
    };
    return (
        <SurveyDispatchContext.Provider value={dispatch}>
            <SurveyStoreContext.Provider value={store}>
                {children}
            </SurveyStoreContext.Provider>
        </SurveyDispatchContext.Provider>
    );
};

export const useSurveyState = () => {
    const {state} = useContext(SurveyStoreContext);
    if (!state) throw new Error('Cannot find AdminStoreProvider');
    return state;
};

export const useSurveyDispatch = () => {
    const dispatch = useContext(SurveyDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
};
