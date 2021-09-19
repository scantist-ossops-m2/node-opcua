// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType, Variant } from "node-opcua-variant"
import { UASystemEvent, UASystemEvent_Base } from "./ua_system_event"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/                      |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |SystemStatusChangeEventType ns=0;i=11446          |
 * |isAbstract      |true                                              |
 */
export interface UASystemStatusChangeEvent_Base extends UASystemEvent_Base {
    systemState: UAProperty<any, any>;
}
export interface UASystemStatusChangeEvent extends UASystemEvent, UASystemStatusChangeEvent_Base {
}