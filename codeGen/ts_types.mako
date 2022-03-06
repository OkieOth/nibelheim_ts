## Template to create TS interfaces from the model types
<%
    import yacg.model.model as model
    import yacg.templateHelper as templateHelper
    import yacg.generators.helper.typescriptFuncs as typescriptFuncs

    templateFile = 'ts_types.mako'
    templateVersion = '0.1.0'
%>/**
    This file is generated.
    Template: ${templateFile} v${templateVersion})
*/

% for currentType in modelTypes:
    % if currentType.description != None:
/**
${templateHelper.addLineBreakToDescription(currentType.description,4)}
*/
    % endif
    % if isinstance(currentType, model.EnumType):
export enum ${currentType.name} {
    % for value in currentType.values:
        ${value} = "${value}",
    % endfor
}

    % else:
export interface ${currentType.name} {
    % if hasattr(currentType,'properties'):
    % for prop in currentType.properties:
        % if prop.description != None:

    /**
    ${templateHelper.addLineBreakToDescription(prop.description,4)}
    */
        % endif
    ${prop.name}${'' if prop.required else '?'}: ${typescriptFuncs.printTypescriptType(prop.type, prop.isArray)};
    % endfor
    % endif
}

% endif
% endfor
