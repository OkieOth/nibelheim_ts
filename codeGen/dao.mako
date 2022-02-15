## Template to create factory functions that creates random data
<%
    import yacg.model.model as model
    import yacg.model.modelFuncs as modelFuncs
    import yacg.templateHelper as templateHelper

    templateFile = 'dao.mako'
    templateVersion = '0.1.0'

%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})

    The file provides functions to access mongo db. For all types that are
    tagged with 'mongodb' the needed function for query, insert, update and
    delete are exported.
*/
import * as types from 'types';

% for currentType in modelTypes:

% endfor
