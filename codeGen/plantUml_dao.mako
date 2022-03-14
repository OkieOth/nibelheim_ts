## Template to create PlantUml class diagrams for the model types
## that are stored in mongodb
<%
    import yacg.model.modelFuncs as modelFuncs
    import yacg.util.stringUtils as stringUtils
    import yacg.templateHelper as templateHelper

    templateFile = 'plantUml_dao.mako'
    templateVersion = '0.1.0'

    mongoTypes = modelFuncs.getTypesWithTag(modelTypes, ["mongodb"])
%>
@startuml
hide empty methods

title "\nCreated Mongodb Collections\n\n"

% for type1 in mongoTypes:
package "Collection: ${type1.name}" {
<%
        relatedTypes = modelFuncs.getTypeAndAllChildTypes(type1)
%>
    % for type in relatedTypes:
        % if modelFuncs.isEnumType(type):
    enum "${modelFuncs.getTypeName(type)}" as ${type1.name}_${modelFuncs.getTypeName(type)} {
            % for value in type.values:
        ${stringUtils.toUpperCaseName(value)}
            % endfor
    }
        % else:
    class "${modelFuncs.getTypeName(type)}" as ${type1.name}_${modelFuncs.getTypeName(type)} {
            % if hasattr(type,'properties'):
                % for prop in type.properties:
            ${modelFuncs.getTypeName(prop.type)}${'[]' if prop.isArray else ''} ${prop.name}
                % endfor
            % endif
    }
        % endif
    % endfor
    % for type in relatedTypes:
<%
            ## array to store already printed links between the objects
            alreadyLinkedTypes=[]
%>
        % if hasattr(type,'properties'):
            % for prop in type.properties:
                % if (not modelFuncs.isBaseType(prop.type)):
                    % if prop.type.name not in alreadyLinkedTypes:
    ${type1.name}_${modelFuncs.getTypeName(type)} ${ '"0"' if prop.isArray else '' } *-- ${'"n"' if prop.isArray else ''} ${type1.name}_${modelFuncs.getTypeName(prop.type)}
<%
                    ## add the current type name to the already linked types
                    alreadyLinkedTypes.append(modelFuncs.getTypeName(prop.type))
%>
                    % endif
                % endif
            % endfor
        % endif
    % endfor
}
% endfor

footer \ngenerated with yacg (https://github.com/OkieOth/yacg),\n(template: ${templateFile} v${templateVersion})\npowered by plantuml (https://plantuml.com/)
@enduml