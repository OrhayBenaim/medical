export interface Question {
    id:           number;
    title:        string;
    type:         'number' | 'radio' | 'text' | 'select';
    options:       string[];
    answer?:       string;
    parentAnswer?: string;
    childItems?:   Question[];
    visible?: boolean;
}

